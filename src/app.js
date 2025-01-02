document
    .getElementById('fileName')
    .addEventListener('change', (e) => {
        e.target.files[0].text().then(
            (text) => {
                const arr = text.split(`\r\n`);
                const myArr = [];
                const nums = [];
                let counter = 0;
                const message = [];

                for (let item of arr) {
                    myArr.push(item.split(` `));
                }

                for (let i = 1; i < myArr.length; i++) {
                    nums.push(i + counter);
                    counter += i;
                    if (counter + i > myArr.length)
                        break;
                }

                for (let j = 0; j < nums.length; j++) {
                    const found = myArr.find((item) => parseInt(item[0]) === nums[j]);
                    message.push(found[1]);
                }

                console.log(message.join(' '));
            });
    });