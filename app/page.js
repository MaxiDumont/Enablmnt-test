"use client"
import Image from 'next/image'
import ResponsiveAppBar from '../components/appBar'
import Card from '../components/card/card'
import Link from 'next/link'
import { Button,Grid } from "@mui/material";

export default function Home() {
  return (
    <main className="">
      <ResponsiveAppBar />

      {/* go to the first user */}

      <Grid container justifyContent="center" sx={{
        position: "relative",
        top: "200px",

        }}>

      <Grid container justifyContent="center" sx={{
        backgroundColor: "#496692",
        width: "300px",
        borderRadius: "5px",
        top: "250px",
       }}>
        <Link href="/users/1">
          <Button variant="contained" color="success" sx={{
            width: "300px",
            fontFamily: "pt serif"
          }}>Go to the first user</Button>
        </Link>
      </Grid>
      </Grid>
    </main>
  )
}
