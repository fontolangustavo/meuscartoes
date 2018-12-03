export default {
    content: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    portfolio: {
        height: 155,
        backgroundColor: '#FCFCFC',
        flexDirection: 'row',
        margin: 15,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2
    },
    portfolioImagem: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#e5e5e5',
        borderRightWidth: 2,
        borderRightColor: '#CBCBCB',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    portfolioDados: {
        width: '70%',
        margin: 10
    },
    cartaoImagem: {
        height: 80,
        width: 80
    },
    dadosCartao: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    dadosCartaoValue: {
        fontSize: 14,
        marginBottom: 7,
        marginLeft: 5
    },
    dadosNumeroCartaoValue: {
        fontFamily: 'Halter',
        fontSize: 13,
        marginBottom: 7,
        marginLeft: 5
    },
    dadosDatasCartao: {
        flexDirection: 'row'
    },
    dadosDatasCartaoGrid: {
        width: '50%'
    },
    dadosDatasCartaoData: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3
    },
    dadosDatasCartaoDataValue: {
        fontFamily: 'Halter',
        fontSize: 12,
        marginLeft: 5
    }
};