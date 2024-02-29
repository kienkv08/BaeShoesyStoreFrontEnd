import React from 'react'
import './Profit.css'
import Header from '../../../components/common/header/header';
import Footer from '../../../components/common/footer/footer';
const OrderHistory = () => {
  return (
    <div class="app">
        <Header/>
	<header class="app-header">
		<div class="app-header-actions">
			<div class="app-header-actions-buttons">
				<button class="icon-button large">
					<i class="ph-magnifying-glass"></i>
				</button>
				<button class="icon-button large">
					<i class="ph-bell"></i>
				</button>
			</div>
		</div>
		<div class="app-header-mobile">
			<button class="icon-button large">
				<i class="ph-list"></i>
			</button>
		</div>

	</header>
	<div class="app-body">
		<div class="app-body-main-content">
			<section class="service-section">
				<h2>Order History</h2>
				<div class="service-section-header">
					<div class="search-field">
						<i class="ph-magnifying-glass"></i>
						<input type="text" placeholder="Order ID:"/>
					</div>
					<button class="flat-button">
						Search
					</button>
				</div>
				<div class="mobile-only">
					<button class="flat-button">
						Toggle search
					</button>
				</div>
				<div class="service-section-footer">
					<p>Services are paid according to the current state of the currency and tariff.</p>
				</div>
			</section>
			<section class="transfer-section">
				<div class="transfers">
					<div class="transfer">
						<div class="transfer-logo">
							<img src="https://assets.codepen.io/285131/apple.svg" />
						</div>
						<dl class="transfer-details">
							<div>
								<dt>Apple Inc.</dt>
								<dd>Apple ID Payment</dd>
							</div>
							<div>
								<dt>4012</dt>
								<dd>Last four digits</dd>
							</div>
							<div>
								<dt>28 Oct. 21</dt>
								<dd>Date payment</dd>
							</div>
						</dl>
						<div class="transfer-number">
							- $ 550
						</div>
					</div>
					<div class="transfer">
						<div class="transfer-logo">
							<img src="https://assets.codepen.io/285131/pinterest.svg" />
						</div>
						<dl class="transfer-details">
							<div>
								<dt>Pinterest</dt>
								<dd>2 year subscription</dd>
							</div>
							<div>
								<dt>5214</dt>
								<dd>Last four digits</dd>
							</div>
							<div>
								<dt>26 Oct. 21</dt>
								<dd>Date payment</dd>
							</div>
						</dl>
						<div class="transfer-number">
							- $ 120
						</div>
					</div>
					<div class="transfer">
						<div class="transfer-logo">
							<img src="https://assets.codepen.io/285131/warner-bros.svg" />
						</div>
						<dl class="transfer-details">
							<div>
								<dt>Warner Bros.</dt>
								<dd>Cinema</dd>
							</div>
							<div>
								<dt>2228</dt>
								<dd>Last four digits</dd>
							</div>
							<div>
								<dt>22 Oct. 21</dt>
								<dd>Date payment</dd>
							</div>
						</dl>
						<div class="transfer-number">
							- $ 70
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
    <Footer/>
</div>
  )
}
export default OrderHistory;
