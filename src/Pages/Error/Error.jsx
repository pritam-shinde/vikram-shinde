import { Container, Box } from "@material-ui/core"
const Error = () => {
  return (
    <>
      <main>
        <section>
          <Container style={{height:"93vh"}} maxWidth="xl" className="d-flex justify-content-center align-items-center">
            <Box className="d-flex flex-column align-items-center justify-content-center">
              <h1>404</h1>
              <h2>Oops.! Page Not Found.</h2>
            </Box>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Error