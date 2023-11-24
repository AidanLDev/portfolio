import React from 'react'
import { verifiedImg } from '../../lib/constants'
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Head from 'next/head'
import SocialMediaBox from '../../components/LinkPages/SocialMediaBox'
import { aidansSocialMedias as socialMedias } from '../../components/LinkPages/socialLinks'

export default function ArniLinks() {
  return (
    <Box className={''}>
      <Head>
        <title>Aidans Socials</title>
      </Head>
      <Center className={''}>
        <Image
          alt="Arni Rianis avatar/profile picture"
          src="/images/BromoSoloRoundSmaller.png"
          width={175}
          height={175}
        />
      </Center>
      <Flex justify="center" p="12px 0">
        <Text p="0 4px 0 0" fontSize="24px" fontWeight={600}>
          Aidan Lowson
        </Text>
        <Image
          src={verifiedImg}
          alt="Verified profile"
          data-testid="verificationTick"
          width={16}
          height={36}
        />
      </Flex>
      <Flex gap="22px" justify="space-around" wrap="wrap">
        {socialMedias.map((social, idx) => (
          <SocialMediaBox
            backgroundImage={social.img}
            tag={social.tag}
            link={social.link}
            key={`${social.img}__${idx}`}
          />
        ))}
      </Flex>
    </Box>
  )
}
