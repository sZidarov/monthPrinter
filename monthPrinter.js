function solve (num){
    let monthNumber = num;
    if (monthNumber<=0 || monthNumber>12){
        console.log('Error!')
    }
    if (monthNumber==1){
        console.log('January');
    } else if (monthNumber==2){
        console.log('February');        
    } else if (monthNumber==3){
        console.log('March');        
    } else if (monthNumber==4){
        console.log('April');        
    } else if (monthNumber==5){
        console.log('May');        
    } else if (monthNumber==6){
        console.log('June');        
    } else if (monthNumber==7){
        console.log('July');        
    } else if (monthNumber==8){
        console.log('August');        
    } else if (monthNumber==9){
        console.log('September');        
    } else if (monthNumber==10){
        console.log('October');        
    } else if (monthNumber==11){
        console.log('November');        
    } else if (monthNumber==12){
        console.log('December');        
    }
}
solve (4);
solve (10);
solve (-1);
solve (88);

