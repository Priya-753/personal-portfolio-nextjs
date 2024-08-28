import { useToast } from "@chakra-ui/react";
import { useState } from 'react';
import Image from 'next/image';
import { useSwipeable } from "react-swipeable";
import { FaGithub } from "react-icons/fa";
import dsa from '../../public/assets/data-structure.png'

const WorkProject = ({ project }) => {
    const toast = useToast();
    const [index, setIndex] = useState(0);
  
    const showGitToast = () => {
      toast({
        description: "Sorry, this project has a private repository!",
        status: "info",
        isClosable: true,
      })
    }
  
    const showProjToast = () => {
      toast({
        description: "Sorry, this project has not been deployed yet!",
        status: "info",
        isClosable: true,
      })
    }
  
    const ahead = () => {
      if (index === project.photo.length-1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }
  
    const back = () => {
      if (index === 0) {
        setIndex(project.photo.length-1)
      } else {
        setIndex(index - 1)
      }
    }
  
    const handlers = useSwipeable({
      onSwipedLeft: () => ahead(),
      onSwipedRight: () => back()
    });

    const TechStack = ({ techStack }) => {
      return (
          <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                  <span 
                      key={index} 
                      className="bg-blue-500 text-white text-xs font-medium px-2 py-2 rounded-half"
                  >
                      {tech}
                  </span>
              ))}
          </div>
      );
  };
  
    return (
      <div>
        <div>
          <div className="flex">
            <h1>{project.name}</h1>
            <TechStack techStack={project.tech} />
          </div>
          <div>
            <div {...handlers}>
              <Image alt='thumbnail image' height='300' width='500' src={dsa}/>
            </div>
            <div>
            <a
                                        href='https://github.com/Priya-753'
                                        target={"_blank"}
                                        rel={"noreferrer"}

                                    ><FaGithub /></a>
            </div>
          </div>
          <div>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default WorkProject
