const { Router } = require( "express" );

const {
    getLanas,
    putLanas,
    postLanas,
    deleteLanas } = require( "../controllers/lanas.controler" );

const router = Router();

router.get( '/', getLanas );
router.post( '/', postLanas );
router.put( '/', putLanas );
router.delete( '/', deleteLanas );

// Export

module.exports = router;