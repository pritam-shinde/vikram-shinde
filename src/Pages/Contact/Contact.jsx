import { Container, Box, Grid, Divider, List, ListItem, ListItemIcon, Link, Typography } from '@material-ui/core';
import { LocalPhone, PinDrop, Mail, LinkedIn, Twitter, Instagram, Facebook, } from '@material-ui/icons';
import { BsSkype } from 'react-icons/bs';
import { FaQuora } from 'react-icons/fa'
import Helmet from 'react-helmet';
import './Sass/Contact.css';
import Data from './Data/Data';

const Contact = () => {


  return (
    <>
     <Helmet>
        <title>Contact Me - Vikram Shinde, Internet Marketing</title>
        <meta name="description" content="You can get in touch with me using the form below. Or you can drop me a message on any social networks" />
        <link rel="canonical" href="/contact" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Contact Me - Vikram Shinde, Internet Marketing" />
        <meta property="og:description" content="You can get in touch with me using the form below. Or you can drop me a message on any social networks" />
        <meta property="og:url" content="/contact" />
        <meta property="article:modified_time" content="2022-04-02T05:43:30+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="3 minutes" />
      </Helmet>
      <main>
        <Container maxWidth="xl" id="contact">
          <Box mt={15}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={10} lg={10} xl={10} className="mx-auto">
              <Box py={2}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <h1 className='text-center'>Contact</h1>
                      <Divider />
                      <Box>
                        <List>
                          {
                            [{ id: "contact1", icon: <LocalPhone />, text: "9527833568" }, { id: "contact2", icon: <Mail />, text: "vikramshinde@gmail.com" }, { id: "contact3", icon: <PinDrop />, text: "Chinchbhavan, 97 Crown Society, Wardha Rd, opposite Bhawan's School, Nagpur, Maharashtra 440005" }].map(item => {
                              return <ListItem>
                                <ListItemIcon>
                                  {item.icon}
                                </ListItemIcon>
                                <p>{item.text}</p>
                              </ListItem>
                            })
                          }
                        </List>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <h3 className='text-center'>Follow Us</h3>
                      <Divider />
                      <Box>
                        <List className='d-flex flex-wrap justify-content-center'>
                          {
                            [{ id: "social-1", link: "/contact", icon: <BsSkype />, bgColor: "#00aff0" }, { id: "social-2", link: "https://www.linkedin.com/in/thevikramshinde/", icon: <LinkedIn />, bgColor: "#0077b5" }, { id: "social-3", link: "https://www.quora.com/profile/Vikram-689", icon: <FaQuora />, bgColor: "#b92b27" }, { id: "social-4", link: "https://www.facebook.com/VikramShinde28", icon: <Facebook />, bgColor: "#3b5998" }, { id: "social-5", link: "https://www.instagram.com/thevikramshinde/", icon: <Instagram />, bgColor: "#e1306c" }, { id: "social-6", link: "https://twitter.com/VikramShinde_", icon: <Twitter />, bgColor: "#1da1f2" }].map(item => {
                              return <ListItem key={item.id}>
                                <Box p={2} className="rounded" style={{ backgroundColor: item.bgColor }}>
                                  <Link href={item.link} target="_blank">
                                    <ListItemIcon className='text-white'>
                                      {item.icon}
                                    </ListItemIcon>
                                  </Link>
                                </Box>
                              </ListItem>
                            })
                          }
                        </List>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box my={3} id="content">
                  <Typography variant='h2' gutterBottom>“Nothing worth having comes easy.”</Typography>
                  <Typography>Taureans are amazing! Their name says it all:</Typography>
                  <ul className='list-unstyled ps-3'>
                    <li><strong>T</strong> for trailblazing</li>
                    <li><strong>A</strong> for ambitious</li>
                    <li><strong>U</strong> for unwavering</li>
                    <li><strong>R</strong> for reliable</li>
                    <li><strong>U</strong> for understanding</li>
                    <li><strong>S</strong> for stable</li>
                  </ul>

                  <Box mt={2}>
                    {
                      Data.map(item => {
                        return <>
                          <h3>{item.title}</h3>
                          {
                            item.param ? item.param.map(item => {
                              return <p><strong>{item.sub}</strong> - {item.text}</p>
                            }) : null
                          }
                          {
                            item.para ? item.para.map(item => {
                              return <p>{item}</p>
                            }) : null
                          }
                        </>
                      })
                    }
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
    </>
  )
}

export default Contact