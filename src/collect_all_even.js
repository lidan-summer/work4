
function collect_same_elements(collection_a, object_b) {
    var newArry = [];
    var newArry_item = 0;
    
    for(var i = 0; i < collection_a.length; i++ ){
        for(var j = 0; j < object_b.value.length; j++){
            if(collection_a[i].key == object_b.value[j]){
                newArry[newArry_item] = collection_a[i].key;
                newArry_item++;
            }
        }
    }
    return newArry;
}

module.exports = collect_same_elements;