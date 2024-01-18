// import { Router } from '@edgio/core'
// import { connectorRoutes } from '@edgio/connectors'
import { Router, edgioRoutes } from '@edgio/core'

// export default new Router().use(connectorRoutes)
    // .static('public')
export default new Router().use(edgioRoutes)