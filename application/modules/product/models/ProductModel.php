<?php
Class ProductModel extends CI_Model
{
	
	function count_all()
 {
  $query = $this->db->get("product");
  return $query->num_rows();
 }



 function count_all_by_search($product)
 {

  $this->db->like('product_title',$product ,'both');
  $this->db->or_like('sku',$product ,'both');
  $query = $this->db->get("product");
  return $query->num_rows();
 }


 function fetch_products($limit, $start)
 {


  $output = '';
  $this->db->select("*");
  $this->db->from("product");
  $this->db->order_by("product_id", "DESC");
  $this->db->limit($limit, $start);
  $products = $this->db->get()->result();
  $output .= '<table id="example1" class="table table-bordered table-striped">
										<thead>
										<tr>
											<th>Sl</th>
											<th><input type="checkbox" id="checkAll"></th>
											<th>Product Code</th>
											<th>Product</th>
											<th hidden >Category</th>
											<th hidden>Purchase Price</th>
											<th>Sell Price</th>
											<th>Discount Price</th>
											<th>Status</th>
											<th>Cration date</th>
											<th class="text-right">Action</th>
										</tr>
										</thead>
										<tbody>';
  $i=0;
 $i= $start+$i;
  foreach ($products as $prod) {

   $featured_image = get_product_meta($prod->product_id, 'featured_image');
   $featured_image = get_media_path($featured_image);
   $link = base_url() . 'product/' . $prod->product_name;


   $output .= '<tr><td>'.++$i.'</td><td><input type="checkbox" id="singleId" class="checkAll"   value="' . $prod->product_id . '"/>										</td>
													<td>' . $prod->sku . '</td><td>
														<img src="' . $featured_image . '" width="30"
															 height="30"/><a  target="" href="' . $link . '">' . $prod->product_title . '</a></td>						
													<td>' . $prod->product_price . '</td><td>' . $prod->discount_price . '</td>';
   $output .= '<td>' . $prod->created_time . '</td><td class="action text-right">
														<a title="edit"
														   href="' . base_url() . 'product-edit/' . $prod->product_id . '"
														<span class="glyphicon glyphicon-edit btn btn-success"></span>
														</a>
														</td></tr>';

  }

  $output .= '</tbody></table>';
  return $output;


 }



 function fetch_product_by_search($limit, $start,$product)
 {


  $output = '';
  $this->db->select("*");
  $this->db->like('product_title',$product ,'both');
 $this->db->or_like('sku',$product ,'both');
  $this->db->from("product");
  $this->db->order_by("product_id", "DESC");
  $this->db->limit($limit, $start);
  $products = $this->db->get()->result();
  $output .= '<table id="example1" class="table table-bordered table-striped">
										<thead>
										<tr>
											<th>Sl</th>
											<th><input type="checkbox" id="checkAll"></th>
											<th>Product Code</th>
											<th>Product</th>
											<th hidden >Category</th>
											<th hidden>Purchase Price</th>
											<th>Sell Price</th>
											<th>Discount Price</th>
											<th>Status</th>
											<th>Cration date</th>
											<th class="text-right">Action</th>
										</tr>
										</thead>
										<tbody>';
  $i=0;
  $i= $start+$i;
  foreach ($products as $prod) {

   $featured_image = get_product_meta($prod->product_id, 'featured_image');
   $featured_image = get_media_path($featured_image);
   $link = base_url() . 'product/' . $prod->product_name;


   $output .= '<tr><td>'.++$i.'</td><td><input type="checkbox" id="singleId" class="checkAll"   value="' . $prod->product_id . '"/>										</td>
													<td>' . $prod->sku . '</td><td>
														<img src="' . $featured_image . '" width="30"
															 height="30"/><a  target="" href="' . $link . '">' . $prod->product_title . '</a></td>						
													<td>' . $prod->product_price . '</td><td>' . $prod->discount_price . '</td>';
   $output .= '<td>' . $prod->created_time . '</td><td class="action text-right">
														<a title="edit"
														   href="' . base_url() . 'product-edit/' . $prod->product_id . '"
														<span class="glyphicon glyphicon-edit btn btn-success"></span>
														</a>
														</td></tr>';

  }

  $output .= '</tbody></table>';
  return $output;


 }




}