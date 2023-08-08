import React from 'react'
import {
    Stack,
    Heading,
    Text,
    SimpleGrid,
} from '@chakra-ui/react'

import Background from '../components/Background.jsx';

const Experience = () => {
  return (
    <Stack paddingLeft={10} paddingRight={10} paddingTop={4} paddingBottom={4}>
            <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: 'l', sm: 'xl', lg: '2xl' }}
                >
                Work
            </Heading>
            <Stack>
            {WORK_ITEMS.map((e) => (
                <WorkExperience key={e.accomplishments} {...e} />
            ))}
            </Stack>
            <br />
            <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: 'l', sm: 'xl', lg: '2xl' }}
                >
                Education
            </Heading>
            <Stack>
            {EDUCATION_ITEMS.map((e) => (
                <Education key={e.degree} {...e} />
            ))}
            </Stack>
            <br />
            <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: 'l', sm: 'xl', lg: '2xl' }}
                >
                Technical Skills
            </Heading>
            <SimpleGrid columns={{sm: 2, md: 3}} spacing='8px'>
                {TECH_SKILLS.map((e) => (
                    <TechSkill key={e.skill} {...e} />
                ))}
            </SimpleGrid>

        <Background />
    </Stack>
  )
}

export default Experience;

const WorkExperience = ({ title, company, accomplishments }) => {
    return (
        <>
            <Heading
                fontWeight={500}
                fontSize={{ base: 'md', sm: 'l', lg: 'xl' }}
                >
                {title} | {company}
            </Heading>
            {accomplishments.map((e) => (
                <Text
                 key={e}
                 fontSize={{ base: 'sm', sm: 'sm', lg: 'md' }}
                 paddingLeft={4}
                >
                   • {e}
                </Text>
            ))}
      </>
    )
}

const Education = ({ degree, school, accomplishments }) => {
    return (
        <>
            <Heading
                fontWeight={500}
                fontSize={{ base: 'md', sm: 'l', lg: 'xl' }}
                >
                {degree} | {school}
            </Heading>
            {accomplishments.map((e) => (
                <Text
                 key={e}
                 fontSize={{ base: 'sm', sm: 'sm', lg: 'md' }}
                 paddingLeft={4}
                >
                    • {e}
                </Text>
            ))}
      </>
    )
}

const TechSkill = ({ skill }) => {
    return (
        <Text
            fontSize={{ base: 'sm', sm: 'sm', lg: 'md' }}
            paddingLeft={4}
        >
           • {skill}
       </Text>
    )
}


const WORK_ITEMS = [
    {
        title: 'Software Engineer II',
        company: 'Approachable Geek',
        accomplishments: [
            'Led project setup for multiple applications, ensuring efficient development processes and smooth project execution',
            'Implemented new coding patterns to improve code quality, maintainability, and scalability of software solutions',
            'Collaborated with design teams to ensure the delivery of engaging user interfaces and seamless user experiences for high-quality software products',
        ]
    },
    {
        title: 'Software Engineer I',
        company: 'Approachable Geek',
        accomplishments: [
            'Developed large applications for web, iOS, and Android using Flutter, React, and Firebase, following trunk-based development and test-driven development practices',
            'Maintained existing apps by fixing bugs, adding new features, and regularly publishing builds',
        ]
    },
    {
        title: 'Junior Software Engineer',
        company: 'Approachable Geek',
        accomplishments: [
            'Worked as part of a distributed team, following a two-week sprint schedule to deliver software solutions efficiently',
        ]
    },
    {
        title: 'Software Developer',
        company: 'French Quarter Festivals, Inc.',
        accomplishments: [
            'Updated the mobile app for French Quarter Fest 2022 using Angular and Ionic',
            'Implemented a dynamic music schedule feature to enhance user experience',

        ]
    },
    {
        title: 'Research & Data Administrator',
        company: 'Levelset',
        accomplishments: [
            'Conducted efficient and accurate research to facilitate lien filing and payment collection for client construction projects',
        ]
    },
    {
        title: 'Bread Baker',
        company: 'La Boulangerie',
        accomplishments: [
            'Produced a wide variety of bread products for the Link Restaurant Group, maintaining high standards of quality and execution',
        ]
    },
  ]

const EDUCATION_ITEMS = [
    {
        degree: 'Bachelor of Science - Mathematics & Computer Science',
        school: 'Tulane University',
        accomplishments: [
            'Tulane University Honors Program & Presidential Scholar',
            'Summa cum Laude',
        ]
    },
    {
        degree: 'IBC Fundamentals of Javascript, Functional Programming, & Web Development, Level 3',
        school: 'Operation Spark',
        accomplishments: []
    },
    {
        degree: 'Yoga Teacher',
        school: 'Yoga With Carson Academy',
        accomplishments: [
            'RYT 200'
        ]
    },
]

const TECH_SKILLS = [
    {skill: 'JavaScript'},
    {skill: 'Node.js'},
    {skill: 'AWS'},
    {skill: 'TypeScript'},
    {skill: 'Express'},
    {skill: 'GCP'},
    {skill: 'Dart'},
    {skill: 'Firebase'},
    {skill: 'Git'},
    {skill: 'Flutter'},
    {skill: 'MySQL'},
    {skill: 'Codemagic'},
    {skill: 'React'},
    {skill: 'PostgreSQL'},
    {skill: 'Visual Studio Code'},
    {skill: 'HTML5'},
    {skill: 'MongoDB'},
    {skill: 'Agile/Scrum'},
    {skill: 'CSS'},
]