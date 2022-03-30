import React from "react";
import styled from "styled-components";
const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "transperant" : "var(--gray-1)"};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? "var(--gary-1)" : "black")};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

function DownloadButton({
  btnText = "test",
  btnLink = "test",
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <a
        className="button"
        to={btnLink}
        href="https://doc-00-8c-docs.googleusercontent.com/docs/securesc/i6fakgd7f8c2sothg162f7gin0gubuai/7usd4h86fa9hllfuhun84gji5qotk0l6/1648665900000/06159338018623915181/06159338018623915181/1xXZs4uUdvuJ7MX621nEwALMccuF01q1l?e=download&ax=ACxEAsaQFjckmVeSk80SUicE4LgbRzJGnA331yvHcrEmQh6_drUxYVvis2DWIo0HZFb_DihtMHe3kX84eQOmK0FzPu2Yh4mE8G6dnru6nkAUwcyl_c33nWDylcN4IUfZhVp82NzBwCMe_CbYotakReG9ESi1_nPM0Tq8SO8HxZOaAfIsdADHdW5s4LtlZ_iWUpZKVK0RTdeHiHi--LAWhE9AGGH0hEu4d0x543U_AmaP4Yr97dL2yUnbirjW6Kw1n3YPDdmhX3pPo7SSCduFW3Ym_1TWeJHsaIDkr_yJj0TVbf2AgQdCKGMNJ9X7qcxi4O79fHPDJOQP6DyMhxJEfnOFyMVHS5LSXZIm7yTjKXcjoQgI_llVn-VGAs0KgsJXDhzhk3h4n8N2Jl6Kn_jx4HAT2s4fLm4otDl7PnmEyFqXkuJZ-Dx6FCYply8t4nW6weqM3WsFCLpag8LAp6tix_3tga29B0_zE1enzVcnGCpYyw2huKSLKGxf8l_LfLNUybTWq91GkKtE1EkrcJWiB_GtiJOUw-CscXkmcUgN7r8W0pk4KkST0Z7X39hWEYyJKPLMikI2j0OP-C8qXoEYtO660Z14Q0vyrQb2f2ryYX4ZE32bGzWrPhma3WtLwaK_vwY_YnAgBsP1LE_iY83NyY0yDoj4BDmndyq2O6izQBYuUxNjyg9_9PWRw47XxexSlwUYZQkjbiY48O3dG_gzIp498RYZMTF5Q9WqIVAzSpeVVP5vOFFTnzefzaRxZ1HS6b-2HybQrAwIYHFwzIRXeKZQ&authuser=0&nonce=ebbtet99b30c4&user=06159338018623915181&hash=cpi0b8kolju57ra06hkavq5l6usrpnrm"
      >
        {btnText}
      </a>
    </ButtonStyle>
  );
}

export default DownloadButton;
