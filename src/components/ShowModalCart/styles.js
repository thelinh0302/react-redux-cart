export const styles=(theme)=>({
    paperCart:{
        top:  '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
    },
    headerCart:{
        backgroundColor: theme.color.primary,
        color: theme.color.textColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(2),

    },
    titleCart:{
        color: theme.color.textColor,
        fontSize: '16pt'
    },
    contentCart:{
        padding: theme.spacing(2),
    },
    clearIcone:{
        cursor: 'pointer',
        fontSize: '20pt'
    }
})
export default styles