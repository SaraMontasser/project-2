import React from 'react'
import Lessons from './Lessons';
import Accordion from 'react-bootstrap/Accordion';


export default function Content(props) {
    const datas = props.content;
    const Course = datas.map((data) => {

        return (
            <>
                <Accordion.Item eventKey={data.id}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <Lessons lessons={data.lessons} />
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </>
        );
    }

    )
    return Course;
}
