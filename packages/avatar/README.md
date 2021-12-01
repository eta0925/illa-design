# Avatar

The Avatar component is used to represent a user and displays the pictures, text or icon.

## Installation

```jsx
yarn add @illa-design/avatar
```

## Import component

```jsx
import { Avatar } from "@illa-dedign/avatar"
```

## API

### Avatar Basic Properties

| Props       | Desc                                                     | Type                                                         | Default    |
| ----------- | -------------------------------------------------------- | ------------------------------------------------------------ | ---------- |
| colorScheme | Color of avatar                                          | `"white" \|"blackAlpha" \|"gray" \|"grayBlue" \|"red" \|"orange" \|"yellow" \|"green" \|"blue" \|"cyan" \|"purple" ` | `"gray"`   |
| src         | The image url of avatar                                  | `string \| string[]`                                         | `-`        |
| size        | Size of the avatar                                       | `"small" \|"medium" \|"large"`                               | `"small"`  |
| text        | The displayed  text of the avatar when src is not loaded | `string \|string[]`                                          | `-`        |
| shape       | The shape of avatar                                      | `"circle" \|"square" `                                       | `"circle"` |
| icon        | The default avatar when text and src is not specified    | `ReactNode`                                                  | `-`        |

### Avatar-group Basic Properties

| Props        | Desc                                  | Type                                                         | Default   |
| ------------ | ------------------------------------- | ------------------------------------------------------------ | --------- |
| colorScheme  | Color of avatar group                 | `"white" \|"blackAlpha" \|"gray" \|"grayBlue" \|"red" \|"orange" \|"yellow" \|"green" \|"blue" \|"cyan" \|"purple" ` | `"gray"`  |
| size         | Size of avatar group                  | `"small" \|"medium" \|"large"`                               | `"small"` |
| maxCount     | The max count of avatar group         | `number `                                                    | `-`       |
| zIndexAscend | The avatars are z-index ascend or not | `boolean`                                                    | `"false"` |



### Avatar Events

| Props | Desc                           | Type         | Default |
| ----- | ------------------------------ | ------------ | ------- |
| click | Callback when click the avatar | `() => void` | `-`     |

## Example

### Basic usage

```jsx
<Avatar />
```

### Set Avatar's size

```jsx
<Avatar />
<Avatar size="small">Small</Avatar>
```

### Set Avatar's shape and color

```jsx
<Avatar />
<Avatar shape="saqure" colorScheme="red">Small</Avatar>

```

### Set Avatar's icon

```jsx
<Avatar />
<Avatar icon={<CloseIcon />} />
```

### Set Avatar's image

```jsx
<Avatar />
<Avatar src='https://bit.ly/dan-abramov' />
```

### Set Avatar's text

```jsx
<Avatar />
<Avatar text="e" />
```

### Set Avatar-group's max count

```jsx
      <AvatarGroup maxCount={2}>
        <Avatar text="e" />
        <Avatar text="l" />
        <Avatar text="c" />
        <Avatar text="o" />
        <Avatar text="m" />
        <Avatar text="e" />  
      </AvatarGroup>
```

