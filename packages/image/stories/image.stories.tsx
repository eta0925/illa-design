import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Image, ImageProps } from "../src"
import { BsFacebook, BsTwitch, BsTwitter } from "react-icons/bs"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Image",
  component: Image,
  decorators: [withTests({ results })],
  argTypes: {
    objectFit: {
      options: ["fill", "container", "cover", "none", "scale-down"],
      control: {
        type: "select",
      },
    },
    alt: {
      control: {
        type: "text",
      },
    },
    fallbackSrc: {
      control: {
        type: "text",
      },
    },
    src: {
      control: {
        type: "text",
      },
    },
    width: {
      control: {
        type: "text",
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
    radius: {
      control: {
        type: "text",
      },
    },
    fallbackIcon: {},
  },
} as Meta

const Template: Story<ImageProps> = (args) => {
  return <div>
    <Image style={{
      display: "inline-block",
      marginLeft: "10px",
    }} {...args} />
    <Image style={{
      display: "inline-block",
      marginLeft: "10px",
    }} fallback={<BsFacebook />} {...args} />
    <Image style={{
      display: "inline-block",
      marginLeft: "10px",
    }} fallback={<BsTwitter />} {...args} />
    <Image style={{
      display: "inline-block",
      marginLeft: "10px",
    }} fallback={<BsTwitch />} {...args} />
  </div>
}

export const Basic = Template.bind({})


