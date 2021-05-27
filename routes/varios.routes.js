const { Router } = require( "express" );

const {
    getVarios,
    putVarios,
    postVarios,
    deleteVarios } = require( "../controllers/varios.controler" );

const router = Router();

router.get( '/', getVarios );
router.post( '/', postVarios );
router.put( '/', putVarios );
router.delete( '/', deleteVarios );

// Export

module.exports = router;