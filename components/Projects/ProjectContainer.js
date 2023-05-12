import { Center, Heading, Box } from '@chakra-ui/react'
import React from 'react'

import style from './style.module.scss'
import ProjectCard from './ProjectCard'

const projects = [
  {
    img: 'doubleATeam.png',
    tooltip: 'The Double A Team blog',
    link: 'https://blog.aidanlowson.com',
  },
  {
    img: 'MusicLibraryProject.png',
    tooltip: 'Music library search',
    link: 'https://song-search-web-search.onrender.com/',
  },
  {
    img: 'ReactBootstrapCityGuide.png',
    tooltip: 'React city guide made with Bootstrap',
    link: 'http://react-bootstrap-city-guide.s3-website.eu-west-2.amazonaws.com/',
  },
  {
    img: 'fizzBuzz.png',
    tooltip: 'FizzBuzz JS edition',
    link: 'http://fizz-buzz.s3-website.eu-west-2.amazonaws.com/',
  },
]

export default function ProjectContainer() {
  return (
    <div className={`${style.projectContainer}`}>
      <Center>
        <Heading p="2rem 0">Projects</Heading>
      </Center>
      <Box display="flex" flexWrap="wrap">
        {projects.map((project, idx) => (
          <ProjectCard
            key={`${project.tooltip}__${idx}`}
            img={project.img}
            tooltip={project.tooltip}
            link={project.link}
          />
        ))}
      </Box>
    </div>
  )
}
