# Testing Library v Cypress

At [LibertyJS 2023](https://libertyjs.com/), a speaker recommended using
[Cypress' component tests](https://docs.cypress.io/guides/core-concepts/testing-types#What-is-Component-Testing)
for UI testing because of it's focus on user interactions. I suspected that
Cypress would be significantly slower than
[Testing Library](https://testing-library.com/) (which also focuses on user
interactions), so I created this repo to test my hypothesis.

## Results

### Round 1

One test with a cold start:

| Run  | Testing Library | Cypress     |
| ---- | --------------- | ----------- |
| 1    | 3.628s          | 19.320s     |
| 2    | 2.720s          | 21.163s     |
| 3    | 3.242s          | 15.742s     |
| 4    | 3.145s          | 16.087s     |
| 5    | 3.044s          | 15.348s     |
| Mean | **3.156s**      | **17.532s** |

### Round 2

Five identical tests with a cold start:

| Run  | Testing Library | Cypress     |
| ---- | --------------- | ----------- |
| 1    | 9.286s          | 47.714s     |
| 2    | 8.184s          | 42.946s     |
| 3    | 6.722s          | 40.665s     |
| 4    | 7.871s          | 40.463s     |
| 5    | 6.619s          | 40.794s     |
| Mean | **7.736s**      | **42.516s** |

## Conclusion

There is definite utility in using Cypress to write component tests, but the
data indicate that it would be an significantly less performant option when
compared with Testing Library.
