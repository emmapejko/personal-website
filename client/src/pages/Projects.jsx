import React from 'react'
import {
    Stack,
    Heading,
    Text,
} from '@chakra-ui/react'

import Background from '../components/Background.jsx';

const Projects = () => {
  return (
    <Stack padding={4}>
        <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: 'l', sm: 'xl', lg: '2xl' }}
            >
            Personal
        </Heading>
        <Stack paddingLeft={4}>
        {PERSONAL_PROJECTS.map((e) => (
            <Project key={e.title} {...e} />
        ))}
        </Stack>
        <br />
        <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: 'l', sm: 'xl', lg: '2xl' }}
            >
            Professional
        </Heading>
        <Stack paddingLeft={4}>
        {PROFESSIONAL_PROJECTS.map((e) => (
            <Project key={e.title} {...e} />
        ))}
        </Stack>

        <Background />
    </Stack>
  )
}

export default Projects;

const Project = ({ title, links, description, subDescription, images }) => {
    return (
        <>
            <Heading
                fontWeight={500}
                fontSize={{ base: 'md', sm: 'l', lg: 'xl' }}
                >
                {title}
            </Heading>
            <ProjectLinks links={links}/>
            <Text
                fontWeight={500}
                fontSize={{ base: 'sm', sm: 'sm', lg: 'md' }}
                paddingLeft={4}
            >
                {description}
            </Text>
            <Text
                fontSize={{ base: 'sm', sm: 'sm', lg: 'md' }}
                paddingLeft={4}
            >
                {subDescription}
            </Text>
      </>
    )
}

const ProjectLinks = (props) => {
    const links = props.links;
    
    if (links) {
        return (<>
            {links.map((e) =>  
                <a key={e} href={e} target="_blank">{e}</a>
            )}
        </>)
    }
    return ( <></> )
}

const PERSONAL_PROJECTS = [
    {
        title: 'Wave Timestacks',
        links: ['https://github.com/emmapejko/timestacks'],
        description:
            'A script to turn videos into a single image',
        subDescription:
            'I\'m a surfer, and in college I embarked on a journey of figuring out a way to give a surf report off of just videos of the waves. One of the best things I discovered was what a timestack is. Timestacks are graphs, where the x-axis represents time and the y-axis is the height of the input video. This script takes in a video and then it graphs a single column of pixels from each frame of the video next to eachother, creating a single image which encapsulates the video as a whole. With videos of waves, this creates this beautiful interesting images that are unlike anything I had seen before.',
        images: [],
    },
    {
        title: 'Limber',
        links: ['https://github.com/emmapejko/limber'],
        description:
            'A yoga sequencing app built with React, Node.js and Express, and a PostgreSQL database',
        subDescription:
            'Stemming from my love for yoga, I wanted to build an app that would allow users to select different paramaters (body part, length, poses, etc.) to build their perfect yoga flow',
        images: [],
    },
]

const PROFESSIONAL_PROJECTS = [
    {
        title: 'ScoutTraks',
        links: null,
        description:
            '',
        subDescription:
            '',
        images: [],
    },
    {
        title: 'Shingle Genie Website',
        links: ['https://shinglegenie.com/'],
        description:
            '',
        subDescription:
            '',
        images: [],
    },
    {
        title: 'Core Anesthesia',
        links: [
            'https://app.coreanesthesia.com/',
            'https://apps.apple.com/us/app/core-anesthesia/id1635172045',
            'https://play.google.com/store/apps/details?id=com.coreanesthesia.prod&hl=en&gl=US',
        ],
        description:
            '',
        subDescription:
            '',
        images: [],
    },
    {
        title: 'MyBook',
        links: null,
        description:
            '',
        subDescription:
            '',
        images: [],
    },
    {
        title: 'CowTinker',
        links: null,
        description:
            '',
        subDescription:
            '',
        images: [],
    },
    {
        title: 'Ezilpro',
        links: null,
        description:
            '',
        subDescription:
            '',
        images: [],
    },
    {
        title: 'BuzzCutt',
        links: ['https://apps.apple.com/us/app/buzzcutt/id6448928356'],
        description:
            '',
        subDescription:
            '',
        images: [],
    },
]