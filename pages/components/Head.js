import Head from 'next/head'

export default function Footer(props) {
    return (
        // Add the proper keywords in the meta
        <Head>
            <title>{props.props.title}</title>
            <meta name="description" content={props.props.metaContent} />
            <link rel="icon" href="/favicon.ico" />
      </Head>
    )
}