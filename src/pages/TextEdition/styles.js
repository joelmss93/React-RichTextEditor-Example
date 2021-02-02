import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 90px;
    flex-direction: column;

    > div {
        margin-bottom: 10px;
        width: 800px;
        height: 400px;
        border: #fff solid 2px;
        border-radius: 6px;

        background: #ebf1f7;
        color: #333333;
    }
`;