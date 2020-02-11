<div class="col-md-offset-0 col-md-12">
<div class="box  box-success">
	<div class="box-header with-border">

		

	</div>
	<div class="box-body">
<div class="table-responsive">
		<table id="example1" class="table table-bordered table-striped table-responsive ">
			<thead>
			<tr>


				<th>Sl</th>
				<th>Ip</th>
				<th>County</th>
				<th>Region</th>
				<th>City</th>
				<th>Org</th>
				<th>Postal</th>
				<th>Timezone</th>
				<th>plate_form</th>
				<th>agent</th>
				<th>date</th>
			</tr>
			</thead>
			<tbody>
			<?php
			$count=0;
            foreach ($hitcounters as $hitcounter) {

				$details    = ip_details("$hitcounter->client_ip");





    ?>
    <tr>



        <td><?php echo ++$count; ?></td>
        <td><?php echo $hitcounter->client_ip; ?></td>
        <td><?php
			if(isset($details->country)) {
				echo $details->country;
			}

			?></td>
        <td>
			<?php
			if(isset($details->region)) {
				echo $details->region;
			}

			?>
		</td>
        <td><?php
			if(isset($details->city)) {
				echo $details->city;
			}

			?></td>

		<td><?php
			if(isset($details->org)) {
				echo $details->org;
			}

			?></td>

		<td><?php
			if(isset($details->postal)) {
				echo $details->postal;
			}

			?></td>
		<td><?php
			if(isset($details->timezone)) {
				echo $details->timezone;
			}

			?></td>
        <td><?php echo $hitcounter->platform; ?></td>
        <td><?php echo $hitcounter->agent; ?></td>
        <td><?php echo $hitcounter->date; ?></td>



    </tr>

          <?php


            }
			?>
			</tbody>

		</table>
</div>


	</div>

</div>
</div>

<?php

function ip_details($IPaddress)
{
	$json       = file_get_contents("http://ipinfo.io/{$IPaddress}");
	$details    = json_decode($json);
	return $details;
}


//echo $details->hostname;
?>