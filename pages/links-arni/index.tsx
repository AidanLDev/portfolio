import React from 'react'
import { SocialMediaLinksContainer } from '../../components/LinkPages/SocialMediaLinksContainer'
import { arnisSocialMedias } from '../../components/LinkPages/socialLinks'

export default function ArnisLinks() {
  return (
    <SocialMediaLinksContainer
      title="Arnis Socials"
      imgSrc="/images/arni-avatar.webp"
      fullName="Arni Riani"
      socialLinks={arnisSocialMedias}
    />
  )
}
