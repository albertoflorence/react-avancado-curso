import '@testing-library/jest-dom'
import 'jest-styled-components'
import './next-image.mock'
import './match-media.mock'
import './useRouter.mock'
import './useSession.mock'

global.fetch = require('node-fetch')
