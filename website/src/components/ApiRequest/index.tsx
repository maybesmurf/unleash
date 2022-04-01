/**
   This component displays API requests in multiple different formats
   using the tabs component. It syncs across the page.

   Please note: it doees NOT cover all kinds of API requests just yet.
   If the type you're looking for isn't included, you may need to do
   some extra development before it can be used. In the future, it may
   be necessary to separate into multiple components based on request
   types, for instance.

**/

import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

const indentation = 2;

type Props = {
    verb: string,
    payload?: any,
    url: string,
    title?: string
}

type PropsWithoutPayload = Omit<Props, 'payload'>


const Component: React.FC<Props> = ({ verb, payload, url, title }) => {
    const verbUpper = verb?.toUpperCase() || '';
    const prettyPayload = JSON.stringify(payload, null, indentation);

    const httpBlock = (payload ? `
${verbUpper} <unleash-url>/${url}
Authorization: <API-token>
content-type: application/json

${prettyPayload}` :`
${verbUpper} <unleash-url>/${url}
Authorization: <API-token>
content-type: application/json`).trim()

    const curlBlock = (payload ? `
curl -H "Content-Type: application/json" \\
     -H "Authorization: <API-token>" \\
     -X ${verbUpper} \\
     -d '${prettyPayload}' \\
     <unleash-url>/${url}` : `
curl -H "Content-Type: application/json" \\
     -H "Authorization: <API-token>" \\
     -X ${verbUpper} \\
     <unleash-url>/${url}` ).trim()

    const httpieBlock = (payload ?
                         `echo '${prettyPayload}' \\
| http ${verbUpper} \\
  <unleash-url>/${url} \\
  Authorization:<API-token>`
        : `
http ${verbUpper} \\
  <unleash-url>/${url} \\
  Authorization:<API-token>`.trim()
        ).trim()

    return (
        <Tabs>
            <TabItem value="http" label="HTTP">
                <CodeBlock language="http" title={title}>
                    {httpBlock}
                </CodeBlock>
            </TabItem>
            <TabItem value="curl" label="cURL">
                <CodeBlock language="bash" title={title}>
            {curlBlock}
                </CodeBlock>
            </TabItem>
            <TabItem value="httpie" label="HTTPie">
                <CodeBlock language="bash" title={title}>
                    {httpieBlock}
                </CodeBlock>
            </TabItem>
        </Tabs>
    );
};

export default Component;
