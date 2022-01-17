import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import {Typography, Container, Button} from '@material-ui/core'

const about = () => {
    return (
        <div>
            <Head>
                <title>KxffieHub.xyz | Home</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400, 500,700&display=swap" />
            </Head>
        
            <main>
                <Container maxWidth="md">
                    <Typography align="left" variant="h4" color="inherit" gutterBottom>
                        Socials
                    </Typography>
                    <Typography align="left" color="inherit" gutterBottom>
                        <Link href="https://www.youtube.com/c/Kxffie?sub_confirmation=1">
                            <Button>youtube</Button>
                        </Link>
                        <Link href="https://discord.kxffiehub.xyz">
                            <Button>discord</Button>
                        </Link>
                        <Link href="https://twitter.kxffiehub.xyz">
                            <Button>twitter (barely used)</Button>
                        </Link>
                        <Link href="https://instagram.kxffiehub.xyz">
                            <Button>instagram</Button>
                        </Link>
                    </Typography>
                    <Typography align="left" variant="h5" color="inherit" gutterBottom>
                        About
                        <Typography variant="subtitle1" color="inherit" align="left" gutterBottom>
                            Despite what twitter says, as I haven't touched it in so long, I've been coding for around 5 years. I first started in middle school, making notepads and renaming them .html and then telling everyone "hey, checkout what i made!" I am a self learner, I taught myself everything I know today with documentation, testing, creating and what-not. I currently know HTML, CSS, SASS, JavaScript, Typescript, ReactJS, some VueJS, Python, Java, and some more CSS/JS frameworks. I've always been fascinated with electronics/code, and half this year, I've taken Java and finishing the year with Python.
                        </Typography>
                        <Typography variant="subtitle1" color="inherit" align="left">
                            I've always like music too, taking it in middle school aswell. I've been playing the Upright Bass for 5 years now and I've been in 2 orchestras, my school and a youth symphony since I'm still in highschool. I plan to join the orchestra in my new hometown aswell.
                        </Typography>
                        <Typography variant="subtitle1" color="inherit" align="left">
                            I also like to play games, especially on <a target="_blank" href="https://steamcommunity.com/id/Kxffie/games/?tab=all">Steam</a>, where I have 133 games <a href="/achievment.png"><Image src="/achievment.png" width="200" height="30" /></a>
                        </Typography>
                    </Typography>
                </Container>
            </main>
        </div>
    )
}

export default about
