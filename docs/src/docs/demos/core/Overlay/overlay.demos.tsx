import React, { useState } from 'react';
import { Button, ElementsGroup, Overlay, Text, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Button, ElementsGroup, Overlay } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div style={{ height: 100, position: 'relative' }}>
        {visible && <Overlay opacity={0.6} color="#000" zIndex={5} />}
        <Button color={visible ? 'red' : 'teal'}>
          {!visible ? 'Click as much as you like' : "Won't click, haha"}
        </Button>
      </div>

      <ElementsGroup position="center">
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </ElementsGroup>
    </>
  );
}`;

export function OverlayBaseDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <CodeDemo code={code} language="tsx">
      <div
        style={{
          margin: 'auto',
          position: 'relative',
          height: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {visible && <Overlay opacity={0.6} color="#000" />}
        <Button color={visible ? 'red' : 'teal'}>
          {!visible ? 'Click as much as you like' : "Won't click, haha"}
        </Button>
      </div>

      <ElementsGroup position="center" style={{ marginTop: 20 }}>
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </ElementsGroup>
    </CodeDemo>
  );
}

const linkCode = `import React from 'react';
import { Overlay, ElementsGroup, Button, Text, useMantineTheme } from '@mantine/core';

function OverlayDemo() {
  const theme = useMantineTheme();
  
  return (
    <div style={{
      position: 'relative',
      padding: theme.spacing.xl,
      theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
    }}>
      <Overlay
        component="a"
        href="https://mantine.dev"
        target="_blank"
        opacity={0}
      />

      <Text>
        You cannon interact with content inside this div as it is overlaid with Overlay component.
        If you click something new tab will be opened
      </Text>

      <ElementsGroup position="center">
        <Button>You will not click me, sorry</Button>
      </ElementsGroup>
    </div>
  );
}`;

export function OverlayLinkDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo code={linkCode} language="tsx">
      <div
        style={{
          position: 'relative',
          padding: theme.spacing.xl,
          maxWidth: 400,
          margin: 'auto',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
        }}
      >
        <Overlay opacity={0} component="a" href="https://mantine.dev" target="_blank" />

        <Text align="center">
          You cannon interact with content inside this div as it is overlaid with Overlay component.
          If you click something new tab will be opened
        </Text>

        <ElementsGroup position="center" style={{ marginTop: 15 }}>
          <Button>You will not click me, sorry</Button>
        </ElementsGroup>
      </div>
    </CodeDemo>
  );
}
