import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

const Form = styled.form`
  margin: 2rem auto 50px auto;
  max-width: var(--max-width);
  border: none;
`
const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  background-color: var(--color-blue);
  color: var(--color-white);
  border-radius: 15px;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid transparent;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  width: 100%;

  &:hover {
    background-color: var(--color-white);
    color: var(--color-blue);
    cursor: pointer;
  }
`

const useFilter = () => {
  const [category, setCategory] = useState("")

  const data = useStaticQuery(graphql`
    query {
      allStrapiCategories {
        nodes {
          id
          name
        }
      }
    }
  `)

  const categories = data.allStrapiCategories.nodes

  // console.log(categories)

  const CategoryFilter = () => (
    <Form>
      <Select onChange={e => setCategory(e.target.value)} value={category}>
        <option value="">- All Certificates -</option>
        {categories.map(option => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </Select>
    </Form>
  )

  return {
    category,
    CategoryFilter,
  }
}

export default useFilter
