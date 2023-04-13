import { API_URL } from "../actions/types";

export const GET_NEW_PRODUCTS_ROUTE = `${API_URL}/product/new/zero-tradable`;
export const POPULATE_ADMIN_PRODUCT_DASHBOARD_ROUTE = `${API_URL}/product/admin/dashboard/product`;
export const GET_ALL_UPLOADED_PRODUCTS_ROUTE = `${API_URL}/product/uploaded`;
export const FETCH_PRODUCT_BRANDS = `${API_URL}/product/all-brands`;
export const INITIALIZE_DIRECT_PRODUCT = `${API_URL}/product/initialize/add/product/direct`;
export const FETCH_PRODUCT_CATEGORIES = `${API_URL}/product/all-categories`;
export const GET_UPLOADED_PRODUCT_BY_ID_ROUTE = `${API_URL}/product/uploaded/check`;
export const UPDATE_EXISTING_PRODUCT = `${API_URL}/product/update/new/product`;
export const GET_ALL_UPLOADED_PRODUCTS_FOR_USER_ROUTE = `${API_URL}/product/uploaded`;
export const FETCH_TRADABLE_PRODUCTS_ROUTE = `${API_URL}/product/approved/tradable-true`;
export const ACCEPT_OR_DECLINE_BID = `${API_URL}/product/bid/accept/product/bid`;
export const ADMIN_PLACE_BID = `${API_URL}/product/bid/add`;
export const FETCH_USER_NEW_PRODUCT = `${API_URL}/product/user/new/product`;
export const POPULATE_STAKE_INFO_ROUTE = `${API_URL}/staking/summarize`;
export const GET_TVL_ROUTE = `${API_URL}/staking/tvl`;
export const GET_TVL_CHART_ROUTE = `${API_URL}/staking/chart`;
export const GET_TVL_CHART_24_HOURS = `${API_URL}/staking/chart/day`;
export const PROCESS_PRODUCT_ORDER_ROUTE = `${API_URL}/order/new`;
export const GET_USERS_BUY_ORDER_ROUTE = `${API_URL}/order/buy`;
export const GET_USERS_SELL_ORDER_ROUTE = `${API_URL}/order/sell`;
export const SELLER_MARK_AS_SHIPPED_ROUTE = `${API_URL}/order/marked-as-shipped`;
export const BUYER_MARK_PRODUCT_AS_RECIEVED = `${API_URL}/order/recieve-product`;
export const CHECK_USER_AND_MEMBERSHIP = `${API_URL}/pub/check-user/check-subscription`;
export const ADD_USER_ADDRESS = `${API_URL}/pub/register/user/address`;
export const AI_TEXT = `${API_URL}/openai/text`;
export const AI_IMAGES = `${API_URL}/openai/images`;
export const GET_EGC_PRICE_COINGEKO_ROUTE = `${API_URL}/coingeko/egc`;
export const USER_INDIRECT_PRODUCTS_STATS = `${API_URL}/product/seller/dirct/product/stats`;
// export const DIRECT_BUY_ORDER_STATS = `${API_URL}/order/buy/order/stats/direct`;
