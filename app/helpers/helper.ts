interface mixDigit {
  first: string
  second: string
  third: string
  fourth: string
  fifth: string
}

export const rewriteString = (text: string): string => {
    if (text) {
      const splitted = text.trim().split(' ');
  
      const masked = splitted.map(s => {
        let string = ''
        let mask = ''
        if (s.length > 2) {
          string = s.substring(0, 2);
          mask = s.substring(2, s.length).replace(/\w/g, '*');
        }
        if (s.length <= 2) {
          if (s.length === 1) {
            return s;
          }
          string = s.substring(0, 1);
          mask = s.substring(1, s.length).replace(/\w/g, '*');
        }
        return string + mask;
      });
      return masked.join(' ');
    }
    return '';
}

export const cardNumberFormat = (cardNumber: string | number, eachLength: number): string => {
    if(cardNumber && eachLength) {
  const digitsOnly = String(cardNumber).replace(/\D/g, '');
  const pattern = new RegExp(`.{1,${eachLength}}`, 'g');
  const groups = digitsOnly.match(pattern) || [];
  return groups.join('-');
  }
 return ''
}

export const mixFormattingNumber = (
  number: number | string , 
  digits : mixDigit | { 
  first: number, 
  second: number, 
  third: number, 
  fourth: number, 
  fifth: number 
  }, separatorPositions: number[], separatorLengths: number[]): number | string => {
    // console.log('separatorPositions', separatorPositions)
    console.log('separatorLengths', separatorLengths)
  if(number && digits) {
    const { first, second, third, fourth, fifth } = digits
    let numberToString = number.toString();
    // the double slash '\\' => it gonna be one slash when i console it
    const regexString = `^(\\d{${first}})(\\d{${second}})(\\d{${third}})(\\d{${fourth}})(\\d{${fifth}})$`
    const regex = new RegExp(regexString)
    const result = numberToString.match(regex);
    
    if (!result) {
      return numberToString;
    }
    // console.log('result',result)
    // console.log('mapping on it', result.map(res => {
    //   console.log('resultsss', res)
    // }))
    // console.log('length', result.slice(1).join('.').length)
    // console.log('result slice',result.slice(1).join('.').substring(0, result.slice(1).join('.').length - Number(fifth)))
  //   let formatted = groups.slice(1).join('.');
  // formatted = formatted.substring(0, formatted.length - group5Digits) + '-' + formatted.substring(formatted.length - group5Digits);
    const formatted = result[1] + '.' + result[2] + '.' + result[3] + '.' + result[4] + '-' + result[5];

    return formatted;
  }
  return number
}

export const thousandSeperator = (number: string | number): string => {
    const options = {
        useGrouping: true,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      };
      const formattedNum = number.toLocaleString('en-US', options);
      
      return formattedNum
}

