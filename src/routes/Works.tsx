import SectionColumn from "../Components/SectionColumn/SectionColumn";
import Section from "../Components/Section/Section";
import BigCardImg from "../Components/BigCardImg/BigCardImg";
import BigCardImgworks from "../Components/BigCardImgWorks/BigCardImgworks";
import { useState, useEffect } from 'react';

interface Project {
  id: number;
  Title: string;
  Subtitle: string;
  imageUrl: string;
}

function Works() {


  const [projects, setProjects] = useState<Project[]>([]);; 

  useEffect(() => {
    fetch('/imgsWorks.json') 
      .then((response) => response.json()) 
      .then((data) => setProjects(data)) 
  }, []); 
  
  const dynamicProjectOne = projects.find((produto) => produto.id === 1);
  const dynamicProjectTwo = projects.find((produto) => produto.id === 2);
  const dynamicProjectThree = projects.find((produto) => produto.id === 3);
  const dynamicProjectfour = projects.find((produto) => produto.id === 4);
  const dynamicProjectfive = projects.find((produto) => produto.id === 5);
  const dynamicProjectsix = projects.find((produto) => produto.id === 6);
  

  return (
    <div className="worksFlex">
      <SectionColumn>
        {dynamicProjectOne ? (  <BigCardImg img={dynamicProjectOne?.imageUrl} title={dynamicProjectOne?.Subtitle} subtitle={dynamicProjectOne?.Title} />): null}
        {dynamicProjectTwo? (<BigCardImgworks img={dynamicProjectTwo.imageUrl} title={dynamicProjectTwo?.Subtitle} subtitle={dynamicProjectTwo.Title} />): null}
      </SectionColumn>
      <SectionColumn>
        <div className='selfSummary'><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5015 0.514274C23.5486 -0.101521 24.4514 -0.101512 24.4985 0.514283L25.6774 15.9176C25.7134 16.3884 26.3219 16.5515 26.5886 16.1617L35.3111 3.4115C35.6598 2.90177 36.4417 3.35319 36.1746 3.91005L29.4939 17.8391C29.2896 18.2649 29.7351 18.7104 30.1609 18.5061L44.09 11.8254C44.6468 11.5583 45.0982 12.3402 44.5885 12.6889L31.8383 21.4114C31.4485 21.6781 31.6116 22.2866 32.0824 22.3226L47.4857 23.5015C48.1015 23.5486 48.1015 24.4514 47.4857 24.4985L32.0824 25.6774C31.6116 25.7134 31.4485 26.3219 31.8383 26.5886L44.5885 35.3111C45.0982 35.6598 44.6468 36.4417 44.09 36.1746L30.1609 29.4939C29.7351 29.2896 29.2896 29.7351 29.4939 30.1609L36.1746 44.09C36.4417 44.6468 35.6598 45.0982 35.3111 44.5885L26.5886 31.8383C26.3219 31.4485 25.7134 31.6116 25.6774 32.0824L24.4985 47.4857C24.4514 48.1015 23.5486 48.1015 23.5015 47.4857L22.3226 32.0824C22.2866 31.6116 21.6781 31.4485 21.4114 31.8383L12.6889 44.5885C12.3402 45.0982 11.5583 44.6468 11.8254 44.09L18.5061 30.1609C18.7104 29.7351 18.2649 29.2896 17.8391 29.4939L3.91005 36.1746C3.35319 36.4417 2.90177 35.6598 3.4115 35.3111L16.1617 26.5886C16.5515 26.3219 16.3884 25.7134 15.9176 25.6774L0.51428 24.4985C-0.101515 24.4514 -0.101523 23.5486 0.514272 23.5015L15.9176 22.3226C16.3884 22.2866 16.5515 21.6781 16.1617 21.4114L3.41151 12.6889C2.90178 12.3402 3.35318 11.5583 3.91004 11.8254L17.8391 18.5061C18.2649 18.7104 18.7104 18.2649 18.5061 17.8391L11.8254 3.91005C11.5583 3.3532 12.3402 2.90177 12.6889 3.4115L21.4114 16.1617C21.6781 16.5515 22.2866 16.3884 22.3226 15.9176L23.5015 0.514274Z" fill="#BCBCBC" fill-opacity="0.6" />
        </svg>
          <h1>ALL PROJECTS</h1>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.5015 0.514274C23.5486 -0.101521 24.4514 -0.101512 24.4985 0.514283L25.6774 15.9176C25.7134 16.3884 26.3219 16.5515 26.5886 16.1617L35.3111 3.4115C35.6598 2.90177 36.4417 3.35319 36.1746 3.91005L29.4939 17.8391C29.2896 18.2649 29.7351 18.7104 30.1609 18.5061L44.09 11.8254C44.6468 11.5583 45.0982 12.3402 44.5885 12.6889L31.8383 21.4114C31.4485 21.6781 31.6116 22.2866 32.0824 22.3226L47.4857 23.5015C48.1015 23.5486 48.1015 24.4514 47.4857 24.4985L32.0824 25.6774C31.6116 25.7134 31.4485 26.3219 31.8383 26.5886L44.5885 35.3111C45.0982 35.6598 44.6468 36.4417 44.09 36.1746L30.1609 29.4939C29.7351 29.2896 29.2896 29.7351 29.4939 30.1609L36.1746 44.09C36.4417 44.6468 35.6598 45.0982 35.3111 44.5885L26.5886 31.8383C26.3219 31.4485 25.7134 31.6116 25.6774 32.0824L24.4985 47.4857C24.4514 48.1015 23.5486 48.1015 23.5015 47.4857L22.3226 32.0824C22.2866 31.6116 21.6781 31.4485 21.4114 31.8383L12.6889 44.5885C12.3402 45.0982 11.5583 44.6468 11.8254 44.09L18.5061 30.1609C18.7104 29.7351 18.2649 29.2896 17.8391 29.4939L3.91005 36.1746C3.35319 36.4417 2.90177 35.6598 3.4115 35.3111L16.1617 26.5886C16.5515 26.3219 16.3884 25.7134 15.9176 25.6774L0.51428 24.4985C-0.101515 24.4514 -0.101523 23.5486 0.514272 23.5015L15.9176 22.3226C16.3884 22.2866 16.5515 21.6781 16.1617 21.4114L3.41151 12.6889C2.90178 12.3402 3.35318 11.5583 3.91004 11.8254L17.8391 18.5061C18.2649 18.7104 18.7104 18.2649 18.5061 17.8391L11.8254 3.91005C11.5583 3.3532 12.3402 2.90177 12.6889 3.4115L21.4114 16.1617C21.6781 16.5515 22.2866 16.3884 22.3226 15.9176L23.5015 0.514274Z" fill="#BCBCBC" fill-opacity="0.6" />
          </svg>
        </div>
        <Section>
        {dynamicProjectThree ? (  <BigCardImg img={dynamicProjectThree?.imageUrl} title={dynamicProjectThree?.Subtitle} subtitle={dynamicProjectThree?.Title} />): null}
        {dynamicProjectfour ? (  <BigCardImg img={dynamicProjectfour?.imageUrl} title={dynamicProjectfour?.Subtitle} subtitle={dynamicProjectfour?.Title} />): null}
        </Section>
        <Section>
        {dynamicProjectfive ? (  <BigCardImg img={dynamicProjectfive?.imageUrl} title={dynamicProjectfive?.Subtitle} subtitle={dynamicProjectfive?.Title} />): null}
        {dynamicProjectsix ? (  <BigCardImg img={dynamicProjectsix?.imageUrl} title={dynamicProjectsix?.Subtitle} subtitle={dynamicProjectsix?.Title} />): null}
        </Section>
      </SectionColumn>
    </div>
  );
}

export default Works;
