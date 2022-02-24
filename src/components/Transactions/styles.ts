import styled from "styled-components";


export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  table{
    margin-top: 5rem;
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
      padding: 1rem 2rem;
      text-align: left;
      color: var(--text-body);
      font-weight: 400;
      line-height: 1.5rem
    }

    td{
      padding: 1rem 2rem;
      background: var(--shape-principal);
      border-radius: 0.25rem;
      color: var(--text-body);

      &:first-child{
        color: var(--text-title);
      }
    }
  }
`