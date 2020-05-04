import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block
} from 'framework7-react';

export default () => (
  <Page name="settings">
    <Navbar title="Settings" />

    <BlockTitle>Profile</BlockTitle>
    <List noHairlinesMd>
      <ListInput
        label="Name"
        type="text"
        placeholder="Muhammed"
      ></ListInput>

      <ListInput
        label="E-mail"
        type="email"
        placeholder="Muhammed@gmail.com"
      ></ListInput>

      <ListInput
        label="Location"
        type="url"
        placeholder="San Mateo, California"
      ></ListInput>

      <ListInput
        label="Age"
        type="tel"
        placeholder="24"
      ></ListInput>

      <ListInput
        label="Phone"
        type="tel"
        placeholder="555-555-5555"
      ></ListInput>

      <ListInput
        label="Gender"
        type="select"
        >
        <option>Male</option>
        <option>Female</option>
      </ListInput>
	  
	  <ListInput
        label="Insurer"
        type="select"
        >
        <option>Gecko</option>
        <option>BBB</option>
		<option>AllCity</option>
		<option>BMB</option>
		<option>European Integrity</option>
		<option>European Family Insurance</option>
      </ListInput>

      <ListInput
        label="Birth date"
        type="date"
        placeholder="Birth day"
        defaultValue="1994-04-30"
      ></ListInput>

      <ListItem
        title="Toggle"
      >
        <Toggle slot="after" />
      </ListItem>

      <ListInput
        label="Range"
        input={false}
      >
        <Range slot="input" value={50} min={0} max={100} step={1} />
      </ListInput>

      <ListInput
        type="textarea"
        label="Textarea"
        placeholder="Bio"
      ></ListInput>
      <ListInput
        type="textarea"
        label="Resizable"
        placeholder="Bio"
        resizable
      ></ListInput>
    </List>

    <BlockTitle>Buttons</BlockTitle>
    <Block strong>
      <Row tag="p">
        <Button className="col">Button</Button>
        <Button className="col" fill>Fill</Button>
      </Row>
      <Row tag="p">
        <Button className="col" raised>Raised</Button>
        <Button className="col" raised fill>Raised Fill</Button>
      </Row>
      <Row tag="p">
        <Button className="col" round>Round</Button>
        <Button className="col" round fill>Round Fill</Button>
      </Row>
      <Row tag="p">
        <Button className="col" outline>Outline</Button>
        <Button className="col" round outline>Outline Round</Button>
      </Row>
      <Row tag="p">
        <Button className="col" small outline>Small</Button>
        <Button className="col" small round outline>Small Round</Button>
      </Row>
      <Row tag="p">
        <Button className="col" small fill>Small</Button>
        <Button className="col" small round fill>Small Round</Button>
      </Row>
      <Row tag="p">
        <Button className="col" large raised>Large</Button>
        <Button className="col" large fill raised>Large Fill</Button>
      </Row>
      <Row tag="p">
        <Button className="col" large fill raised color="red">Large Red</Button>
        <Button className="col" large fill raised color="green">Large Green</Button>
      </Row>
    </Block>

    <BlockTitle>Checkbox group</BlockTitle>
    <List>
      <ListItem
        checkbox
        name="my-checkbox"
        value="Books"
        title="Books"
      ></ListItem>
      <ListItem
        checkbox
        name="my-checkbox"
        value="Movies"
        title="Movies"
      ></ListItem>
      <ListItem
        checkbox
        name="my-checkbox"
        value="Food"
        title="Food"
      ></ListItem>
    </List>

    <BlockTitle>Radio buttons group</BlockTitle>
    <List>
      <ListItem
        radio
        name="radio"
        value="Books"
        title="Books"
      ></ListItem>
      <ListItem
        radio
        name="radio"
        value="Movies"
        title="Movies"
      ></ListItem>
      <ListItem
        radio
        name="radio"
        value="Food"
        title="Food"
      ></ListItem>
    </List>
  </Page>
);