import {Container, Col, Tab, Row, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
/*import colorSharp2 from "../assets/img/colorSharp2.png"; */

export const Projects = () => {

    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];

    return (
     <section className="project" id="project">
        <Container>
            <Row>
                 <Col>
                 <h2>Projects</h2>
                 <p>See some of the projects signed by me</p>
                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                     <Nav.Item>
                        <Nav.Link eventKey="first"> Tab One</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                     </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                     </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                       <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                        </Tab.Pane>                        
                        <Tab.Pane eventKey="second">Lore Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Lore Ipsum</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                 </Col>
            </Row>
        </Container>
        {/*<img className="background-img-right" src={colorSharp2}></img>*/}     
      </section>
    ) 
}