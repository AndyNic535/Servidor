const { Router } = require( "express" );

const {
    getHilos,
    putHilos,
    postHilos,
    deleteHilos } = require( "../controllers/hilos.controler" );

const router = Router();

router.get( '/', getHilos );
router.post( '/', postHilos );
router.put( '/', putHilos );
router.delete( '/', deleteHilos );

// Export

module.exports = router;