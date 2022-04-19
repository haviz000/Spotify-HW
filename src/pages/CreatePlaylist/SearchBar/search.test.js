import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import {setupServer} from 'msw/node'
import config from "../../../utils/Config";
import Tracks from "../Tracks";


const requestOptions = {
  headers: {
    Authorization: "Bearer " + "BQBG4BDDhy1qzHNx9VbgG2hHnbTu5rcZ3trkBt6UmBKXVq53XEsxzAGLWSjjY4NgOSD4Xh_-Qg_hXXJZq64Ueb-6LpvVNt0suoOhhahJlTrviXAj3BS2P8eUEdRaQpHY3sDQKJtvL5Ok3ySPGNGMpwE4rg_vsFM3vjdMeSTA1hbzoyCKMXygFcdC76PD5yw",
    "Content-Type": "application/json",
  },
};

const server = setupServer(
    rest.get(
        `${config.SPOTIFY_BASE_URL}/search?type=track&q=slank`,
        requestOptions,(req,res,ctx) => {
            return res(
                ctx.status(200)
            )
        }
      )
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and display song', async () => { 
    render(<Tracks/>)
    await waitFor(() => { expect(screen.getByTestId('track')).toBeInTheDocument() })
 })