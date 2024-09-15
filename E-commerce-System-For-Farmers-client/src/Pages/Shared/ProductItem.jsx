

const ProductItem = ({item}) => {

    const {
        title, image, price, 
        description
        } = item;


    return (
        <div className="flex space-x-2">
        <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
        <div>
            <h3 className="uppercase">{title}----------</h3>
            <p>{description}</p>
        </div>
        <p className="text-yellow-500">${price}</p>
    </div>
    );
};

export default ProductItem;