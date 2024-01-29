const Operations = {
    sum : '+',
    substruct : '-',
    multiply : '*',
    division : '/',
    cube : '**2'
};

function calculate({a, b, operation}) {
    let result = null;

    switch (operation) {
        case Operations.sum:
            result = sum(a, b);
            break;

        case Operations.substruct:
            result = substruct(a, b);
            break;
            
        case Operations.multiply:
            result = multiply(a, b);
            break;
        
        case Operations.division:
            result = division(a, b);
            break;

            case Operations.cube:
                result = cube(a, b);
            break;

        default:
            break;
    }
    return result
}