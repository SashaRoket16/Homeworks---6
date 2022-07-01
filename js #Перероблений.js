function Human(name, major, age, country) {
    this.name = name;
    this.major = major;
    this.age = age;
    this.country = country;
}

const humans = [new Human("Jason", "actor", 47, "uk"),
    new Human("Dwahne", "actor", 50, "UK"), new Human("Mark", "actor", 51, "UK"),
    new Human("Denzel", "actor", 67, "IK"), new Human("Ryan", "actor", 85, "UK"),
    new Human("Matthew", "actor", 76, "UK"), new Human("John", "actor", 38, "UK")
];

function sortByAgeDesc(arr) {
    arr.sort((firstHuman, secondHuman) => {
        if (firstHuman.age === secondHuman.age) {
            return firstHuman.name > secondHuman.name ? 1 : -1;
        } else {
            return firstHuman.age > secondHuman.age ? -1 : 1;
        }
    });
}
sortByAgeDesc(humans);

document.write("Sort humans by age of descending: <br>");
for (let i = 0; i < humans.length; i++) {
    document.write(`${humans[i].name} - ${humans[i].age} <br>`);
}

document.write("<hr>");

//#2
function Human_(name, age, height, weight, country) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.country = country;
}

Human_.prototype.welcome = function() {
    if (this.country === "Ukraine") {
        document.write(`Good evening ${this.name}, we are from Ukraine! <br>`);
    } else {
        document.write(`${this.name}, Ukrаine is a European country! <br>`);
    }
};

Human_.prototype.bodyMassIndex = function() {
    let index = this.weight / Math.pow(this.height, 2);

    switch (true) {
        case index < 18.5:
            {
                document.write(
                    "You need to gain weight! Not enough weight to be healthy! <br>"
                );
                break;
            }
        case index >= 18.5 && index < 24.9:
            {
                document.write("You're great, your weight is normal! <br>");
                break;
            }
        case index >= 24.9 && index < 29.9:
            {
                document.write("Excess weight! Control your diet and exercise! <br>");
                break;
            }
        default:
            {
                document.write(
                    "Big overweight! You need to lose weight! Love yourself, wonderful life! <br>"
                );
            }
    }
};

let human_1 = new Human_("Benjamin", 24, 1.76, 61, "Ukraine");
let human_2 = new Human_("William", 27, 1.86, 104, "England");
let human_3 = new Human_("Liam", 23, 1.62, 70, "USA");

const humans_ = new Array(human_1, human_2, human_3);

for (let human in humans_) {
    document.write(`Name: ${humans_[human].name}, Age: ${humans_[human].age}, Height: ${humans_[human].height},
      Weight: ${humans_[human].weight}, Country: ${humans_[human].country} <br>`);
}
document.write("<br>");

human_1.welcome();
human_1.bodyMassIndex();
document.write("<br>");

human_2.welcome();
human_2.bodyMassIndex();
document.write("<br>");

human_3.welcome();
human_3.bodyMassIndex();