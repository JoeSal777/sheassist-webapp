import React, { Component } from 'react';
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Mavis_pic from "../../images/mavis-square.jpg";
import Albert_pic from "../../images/albert-square.jpg";
import Georgina_pic from "../../images/georgina-square.jpg";

class Carousel extends Component {

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    <Card 
                        imgSrc={Mavis_pic}
                        Name={"Mavis Sarfowah Aggrey"}
                        subTitle={"Client Account Manager"}
                        Link={"Link"}
                    />
                    <Card 
                        imgSrc={Albert_pic}
                        Name={"Albert Nii Ayikwei Ammah"}
                        subTitle={"Graphic Designer & Photo Retoucher"}
                        Link={"Link"}
                    />
                    <Card 
                        imgSrc={Georgina_pic}
                        Name={"Georgina Spio-Williams"}
                        subTitle={"Personal Assitant"}
                        Link={"Link"}
                    />
                </Row>
                <Row className="justify-content-around">
                    <Card 
                        imgSrc={Mavis_pic}
                        Name={"Lisa Abeduwah Aggrey"}
                        subTitle={"Social Media Blogging"}
                        Link={"Link"}
                    />
                    <Card 
                        imgSrc={Albert_pic}
                        Name={"Daniel Osei-Akoto"}
                        subTitle={"Photography and Video Editor"}
                        Link={"Link"}
                    />
                    <Card 
                        imgSrc={Georgina_pic}
                        Name={"Christiana Quayson"}
                        subTitle={"Website Developer"}
                        Link={"Link"}
                    />
                </Row>
            </Container>
        );
    }
}

export default Carousel;