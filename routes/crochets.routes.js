const { Router } = require( "express" );

const {
    getCrochets,
    putCrochets,
    postCrochets,
    deleteCrochets } = require( "../controllers/crochets.controler" );

const router = Router();

router.get( '/', getCrochets );
router.post( '/', postCrochets );
router.put( '/', putCrochets );
router.delete( '/', deleteCrochets );

// Export

module.exports = router;