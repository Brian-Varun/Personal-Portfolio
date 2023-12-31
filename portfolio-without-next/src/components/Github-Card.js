import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Flex, Progress, Link, Stack, VStack, Box, Heading, Text, HStack, useBreakpointValue, Button, Divider, Tag, TagLeftIcon, TagLabel, Card, CardHeader, CardBody, CardFooter, Image, LinkBox, LinkOverlay, SlideFade  } from '@chakra-ui/react';
import { FaCircle, FaEnvelope, FaPhone, FaLinkedin, FaGithub, Facode, FaHeart, FaReact } from 'react-icons/fa';

/* List of common languages - look at colors.json for other colors to reference*/
const languageColors = {
    JavaScript: '#F1E05A',
    CSS: '#563D7C',
    HTML: '#E34C26',
    Python: '#3572A5',
    Java: '#b07219',
    Ruby: '#701516',
    TypeScript: '#2b7489',
    'C#': "#178600",
    Rust: "#dea584",
    'C++': "#f34b7d",
    PHP: "#4F5D95",
    Shell: "#89e051",
    C: "#555555",
    Go: "#00ADD8",
    Ruby: "#701516",
    Lua: "#000080",
    Kotlin: "#A97BFF",
  };


const RepoInfo = ({ repoName }) => {
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/${repoName}`);
        const {
          html_url: repoLink,
          languages_url: languagesURL,
          contributors_url: contributorsURL,
          updated_at: lastUpdated,
        } = response.data;

        const languagesResponse = await axios.get(languagesURL);
        const languagesData = languagesResponse.data;

        const contributorsResponse = await axios.get(contributorsURL);
        const contributorsData = contributorsResponse.data.map((contributor) => contributor.login);

        // Calculate language percentages
        const totalSize = Object.values(languagesData).reduce((acc, size) => acc + size, 0);
        const languagePercentages = {};
        for (const [lang, size] of Object.entries(languagesData)) {
          const percentage = ((size / totalSize) * 100).toFixed(2);
          languagePercentages[lang] = `${percentage}%`;
        }

        const repoInfo = {
          repoLink,
          languages: languagePercentages,
          contributors: contributorsData,
          lastUpdated,
        };

        setRepoData(repoInfo);
      } catch (error) {
        console.error('Error fetching repository data:', error);
      }
    };

    fetchRepoData();
  }, [repoName]);

  

  return (
    <div style={{ width: '100%' }}>
    {repoData ? (
      <div style={{ width: '100%' }}>
        <Flex style={{ width: '100%' }}>
          <Box style={{ width: '100%' }}>
            <Card style={{ width: '100%' }} p="2">
              <Flex flexDirection={{ base: 'column', md: 'row' }}>
                    <Link href={repoData.repoLink} isExternal pb="1" pr="2" pt="1.5">
                        <Button leftIcon={<FaGithub />} bgColor='#333' textColor='white' variant='outline'
                        sx={{
                            '&:hover': {
                            bgColor: "white",
                            textColor: 'black',
                            },
                        }}
                        >
                        Github
                        </Button>
                    </Link>
                    <Heading pb="1">
                     {repoName.substring(repoName.indexOf('/') + 1)}
                    </Heading>
                    </Flex>
                    <Text  pb="1">
                    <strong>Contributors:</strong> {repoData.contributors.join(', ')}
                    </Text>
                    <Flex>
                    {Object.entries(repoData.languages).map(([lang, percentage]) => (
                        <Box
                        key={lang}
                        height="2"
                        width={percentage}
                        bgColor= {languageColors[lang] || 'gray'}
                        />
                    ))}
                    </Flex>
                    <Flex flexWrap="wrap" pb="1" width="100%">
                    {Object.entries(repoData.languages).map(([lang, percentage]) => (
                        <Tag
                        key={lang}
                        height="2"
                        width="auto"
                        variant="none"
                        style={{ minWidth: '100px', marginRight: '5px' }} // Adjust minimum width and margin
                        >
                        <TagLeftIcon boxSize="10px" as={FaCircle} color={languageColors[lang] || 'gray'} />
                        <TagLabel>
                        <Flex>
                            <Text pr="1">{lang}{' '}</Text>
                            <Text color="gray" fontWeight="thin">{percentage}</Text>
                        </Flex>
                        </TagLabel>
                        </Tag>
                    ))}
                    </Flex>

                    <Text>
                    <strong>Last Updated:</strong> {repoData.lastUpdated.substring(0,10)}
                    </Text>
                </Card>
            </Box>
          </Flex>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RepoInfo;
