const { Router } = require( 'express' );

const {    
    getTejidos,
    putTejidos,
    postTejidos,
    deleteTejidos } = require( '../controllers/tejidos.controler' );

const router = Router();

router.get( '/', getTejidos );
router.post( '/', postTejidos );
router.put( '/', putTejidos );
router.delete( '/', deleteTejidos );

// Export

module.exports = router;