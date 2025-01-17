'use client'

import React from 'react'
import styles from './style.module.scss'
import { Box, Text } from '@chakra-ui/react'
import { Tooltip } from '../ui/tooltip'
import { AiFillGithub } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'
import { motion, Variants } from 'framer-motion'
import { Project } from '../../interfaces/projectInterfaces'
import { MotionImageProps } from '../../lib/types'

const cardVariants: Variants = {
  offscreen: {
    scale: 0.7, // Start smaller
    opacity: 0, // Start fully transparent
  },
  onscreen: {
    scale: 1, // Grow to full size
    opacity: 1, // Become fully opaque
    transition: {
      type: 'tween',
      duration: 0.6,
    },
  },
}

const MotionImg = motion.img as React.FC<MotionImageProps>

export default function ProjectCard({
  img,
  link,
  title,
  gitHubLink,
  date,
  description,
  tags,
}: Project) {
  return (
    <motion.div
      viewport={{ once: true, amount: 0.8 }}
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
    >
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className={styles.projectLink}
      >
        <Tooltip content={`Click to view - ${title}`}>
          <MotionImg
            alt={title}
            src={`/images/Projects/${img}`}
            width="100%"
            whileHover={{ scale: 1.02 }}
          />
        </Tooltip>
      </a>
      <Box className={styles.projectCardContent}>
        <Box className={styles.projectHeading}>
          <Box className={styles.projectTitleTagsContainer}>
            <Text className={styles.heading}>{title}</Text>
            <Box className={styles.tags}>
              {tags.map((tag, idx) => (
                <Text key={`${tag}__${idx}`}>{tag}</Text>
              ))}
            </Box>
          </Box>
          <Text className={styles.date}>Created Date - {date}</Text>
        </Box>
        <Box className={styles.descriptionBox}>
          <Text>{description}</Text>
        </Box>
        <Box className={styles.links}>
          <a href={gitHubLink} rel="noreferrer" target="_blank">
            <AiFillGithub />
            <Text>GitHub</Text>
          </a>
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            className={styles.viewProjectsLink}
          >
            <Text>View Project</Text>
            <BsArrowRightShort />
          </a>
        </Box>
      </Box>
    </motion.div>
  )
}
