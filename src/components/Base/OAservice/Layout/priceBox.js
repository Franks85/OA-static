import React from 'react'
import styled from 'styled-components'
import { Col } from 'reactstrap'
import {media} from '../../../../Util/StyledComponent/mediaQueryHelper'

const PriceBox = styled.div`
    border-radius: 8px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    transition: all .15s ease-out;
    transform: translateY(0px);
    background-color: #fff;
    border: 2px solid ${props => props.border};
    text-align: center;
    padding: 2rem;
    min-height: 16rem;
    margin-bottom: 2rem;
    :hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    span {
      font-size: 1.8rem;
      ${media.lessThan("phone")`
      font-size: 1.5rem;
    `};
    }
`;

const Divider = styled.div`
  border-bottom: 1px solid #ccc;
  height: 1px;
  width: 60px;
  margin: auto;
  margin-bottom: 2rem;
`;

const priceBox = props => {
    const { option, target, price, border } = props;
  return (
    <Col md={4}>
        <PriceBox border={border}>
            <h3>{option}</h3>
            <p className='text-secondary'>{target}</p>
            <Divider />
            <span>{price}</span>
        </PriceBox>
    </Col>
)
  }

export default priceBox