let tempCel = prompt("Введите температуру в градусах цельсия: ");
tempFar = ((9/5)*tempCel+32);
temp = tempFar.toFixed(1);
alert(`Цельсий: ${tempCel} Фаргейт:  ${temp}`);