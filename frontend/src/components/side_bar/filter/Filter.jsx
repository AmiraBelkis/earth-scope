import { Accordion, Col, Container, Form, Row } from "react-bootstrap"
import { MultiSelector } from "./MultiSelector"
import { Selector } from "./Selector"
import { DateRangePicker_ } from "./DateRange/DateRangePicker"
import { Radio } from "./Radio"
import { retrieveData } from "../../../hooks/retrieveData"
import { statusOption, urls } from "../../../utils/constants"
import { Toast_ } from "../../Toast"
import { SideBarHeader } from "../SideBarHeader"


export const Filter = () => {

    const data = {
        regions: retrieveData(urls.regions),
        categories: retrieveData(urls.categories),
        sources: retrieveData(urls.sources)
    }
    return <>
        <Container className="filter-container mt-3">
            <Accordion defaultActiveKey="0">
                <Col sm="12" className="mb-3">
                    <SideBarHeader title="Filter"></SideBarHeader>
                </Col>
                <Accordion.Collapse eventKey="0">
                    <Form>
                        <Row style={{ "gap": ".9rem" }}>
                            <Selector name="region" options={data.regions.data} loading={data.regions.loading} label="Region" ></Selector>
                            <MultiSelector name="categoriesList" options={data.categories.data} loading={data.categories.loading} label="Category" ></MultiSelector>
                            <DateRangePicker_ name="date" label="Date"></DateRangePicker_>
                            <MultiSelector name="sourcesList" options={data.sources.data} loading={data.sources.loading} label="Source" ></MultiSelector>
                            <Radio options={statusOption} label="Status" name="status" ></Radio>

                        </Row>
                    </Form>
                </Accordion.Collapse>
            </Accordion>
        </Container >
        {
            Object.keys(data).map((key) => {
                const item = data[key];
                if (item.error && !item.loading) {
                    return (
                        <Toast_ key={key} iconName="jam:alert" type="danger" show={true}>
                            Error: An error occurred while trying to retrieve the {key} list.
                        </Toast_>
                    );
                }
                return null;
            })
        }
    </>
}