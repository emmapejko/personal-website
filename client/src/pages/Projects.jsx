import React from 'react'
import {
    Stack,
    Heading,
    Text,
    HStack,
    Divider,
    Box,
} from '@chakra-ui/react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import AppleIcon from '@mui/icons-material/Apple'
import GoogleIcon from '@mui/icons-material/Google'

import Background from '../components/Background.jsx';

const Projects = () => {
  return (
    <Stack paddingLeft={10} paddingRight={10} paddingTop={4} paddingBottom={4}>
        <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: 'l', sm: 'xl', lg: '2xl' }}
            >
            Personal
        </Heading>
        <Stack>
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
        <Stack>
        {PROFESSIONAL_PROJECTS.map((e) => (
            <Project key={e.title} {...e} />
        ))}
        </Stack>

        <Background />
    </Stack>
  )
}

export default Projects;

const Project = ({ title, githubLink, webLink, appleLink, googleLink, description, subDescription, images, techStack }) => {
    return (
        <>  
            <HStack spacing='8px'>
                    <Heading
                    fontWeight={500}
                    fontSize={{ base: 'md', sm: 'l', lg: 'xl' }}
                    >
                    {title}
                    </Heading>
                    <Box h='20px'>
                        <Divider orientation='vertical' borderColor='black'/>
                    </Box>
                    <Text
                    fontWeight={500}
                    fontSize={{ base: 'sm', sm: 'sm', lg: 'md' }}
                    >
                        {description}
                    </Text>
                    { githubLink != null ?
                        <GitHubLink link={githubLink}/>
                        : <></>
                    }
                    { webLink != null ?
                        <WebsiteLink link={webLink}/>
                        : <></>
                    }
                    { appleLink != null ?
                        <AppleLink link={appleLink}/>
                        : <></>
                    }
                    { googleLink != null ?
                        <GoogleLink link={googleLink}/>
                        : <></>
                    }
            </HStack>
            <Text
                fontSize={{ base: 'xs', sm: 'xs', lg: 'sm' }}
                paddingLeft={4}
                as='i'
            >
                {techStack.join(', ')}
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

const GitHubLink = ({ link }) => {
    return <GitHubIcon onClick={() => window.open(link, "_blank")} style={{cursor: 'pointer'}}/>
}

const WebsiteLink = ({ link }) => {
    return <LaunchIcon onClick={() => window.open(link, "_blank")} style={{cursor: 'pointer'}}/>
}

const AppleLink = ({ link }) => {
    return <AppleIcon onClick={() => window.open(link, "_blank")} style={{cursor: 'pointer'}}/>
}

const GoogleLink = ({ link }) => {
    return <GoogleIcon onClick={() => window.open(link, "_blank")} style={{cursor: 'pointer'}}/>
}

const PERSONAL_PROJECTS = [
    {
        title: 'Wave Timestacks',
        githubLink: 'https://github.com/emmapejko/timestacks',
        webLink: null,
        appleLink: null,
        googleLink: null,
        description:
            'A script to turn videos into a single image',
        subDescription:
            'I\'m a surfer, and in college I embarked on a journey of figuring out a way to give a surf report off of just videos of the waves. One of the best things I discovered was what a timestack is. Timestacks are graphs, where the x-axis represents time and the y-axis is the height of the input video. This script takes in a video and then it graphs a single column of pixels from each frame of the video next to eachother, creating a single image which encapsulates the video as a whole. With videos of waves, this creates this beautiful interesting images that are unlike anything I had seen before.',
        images: [],
        techStack: [
            'Python',
        ],
    },
    {
        title: 'Limber',
        githubLink: 'https://github.com/emmapejko/limber',
        webLink: null,
        appleLink: null,
        googleLink: null,
        description:
            'A yoga sequencing app',
        subDescription:
            'Stemming from my love for yoga, I wanted to build an app that would allow users to select different paramaters (body part, length, poses, etc.) to build their perfect yoga flow.',
        images: [],
        techStack: [
            'React',
            'Node.js',
            'Express',
            'Webpack',
            'PostgreSQL',
        ],
    },
]

const PROFESSIONAL_PROJECTS = [
    {
        title: 'ScoutTraks',
        githubLink: null,
        webLink: null,
        appleLink: null,
        googleLink: null,
        description:
            'Construction management app allowing workers to markup blueprints as materials are installed',
        subDescription:
            '',
        images: [],
        techStack: [
            'Dart',
            'Flutter',
            'Firebase',
            'TypeScript'
        ],
    },
    {
        title: 'Shingle Genie Website',
        githubLink: null,
        webLink: 'https://shinglegenie.com/',
        appleLink: null,
        googleLink: null,
        description:
            'Advertising site for mobile app where customers can register for business accounts',
        subDescription:
            '',
        images: [],
        techStack: [
            'React',
            'Node.js',
            'Express',
            'Webpack',
            'Firebase',
        ],
    },
    {
        title: 'Core Anesthesia',
        githubLink: null,
        webLink: 'https://app.coreanesthesia.com/',
        appleLink: 'https://apps.apple.com/us/app/core-anesthesia/id1635172045',
        googleLink: 'https://play.google.com/store/apps/details?id=com.coreanesthesia.prod&hl=en&gl=US',
        description:
            'Educational podcasting app for nurse anesthetists',
        subDescription:
            '',
        images: [],
        techStack: [
            'Dart',
            'Flutter',
            'Firebase',
            'TypeScript'
        ],
    },
    {
        title: 'MyBook',
        githubLink: null,
        webLink: null,
        appleLink: null,
        googleLink: null,
        description:
            'App for musicians to upload and markup sheet music',
        subDescription:
            '',
        images: [],
        techStack: [
            'Dart',
            'Flutter',
            'Firebase',
            'TypeScript'
        ],
    },
    {
        title: 'CowTinker',
        githubLink: null,
        webLink: null,
        appleLink: null,
        googleLink: null,
        description:
            'App built on top of an existing API for yoga studio management',
        subDescription:
            '',
        images: [],
        techStack: [
            'Dart',
            'Flutter',
            'TypeScript'
        ],
    },
    {
        title: 'Ezilpro',
        githubLink: null,
        webLink: null,
        appleLink: null,
        googleLink: null,
        description:
            'Custom project management tool',
        subDescription:
            '',
        images: [],
        techStack: [
                'Dart',
                'Flutter',
                'Firebase',
                'TypeScript',
            ],
    },
    {
        title: 'BuzzCutt',
        githubLink: null,
        webLink: null,
        appleLink: 'https://apps.apple.com/us/app/buzzcutt/id6448928356',
        googleLink: null,
        description:
            'App for finding places that sell non-alcoholic beverages',
        subDescription:
            '',
        images: [],
        techStack: [
            'Dart',
            'Flutter',
            'Firebase',
            'TypeScript',
            'MongoDB',
        ],
    },
]