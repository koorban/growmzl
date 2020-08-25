<Card className={classes.products}>
<Typography type="title" className={classes.title}>
    Products
</Typography>
<List dense>
{products.map((product, i) => {
    return <span key={i}>
        <ListItem>
        <CardMedia
            className={classes.cover}
            src={product.imageUrl}
            title={product.name}
            component="img"
        />
        <div className={classes.details}>
            <Typography type="headline" component="h2" color="primary" className={classes.productTitle}>
            {product.name}
            </Typography>
            <Typography type="subheading" component="h4" className={classes.subheading}>
            Quantity: {product.quantity} | Price: ${product.price}
            </Typography>
        </div>
        </ListItem>
        <Divider/></span>})}
</List>
</Card>

products: {
    padding: '24px'
},
addButton:{
    float:'right'
},
leftIcon: {
    marginRight: "8px"
},
title: {
    margin: theme.spacing(2),
    color: theme.palette.protectedTitle,
    fontSize: '1.2em'
},
subheading: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
},
cover: {
    width: 110,
    height: 100,
    margin: '8px'
},
details: {
    padding: '10px'
},